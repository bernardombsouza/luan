#!/usr/bin/env python3
"""
Backend API Tests for Bravia Engenharia Website
Testing contact form endpoints and API functionality
"""

import requests
import json
import sys
from datetime import datetime

class BraviaAPITester:
    def __init__(self, base_url="https://oil-gas-solutions-1.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, status, details=""):
        """Log test result"""
        self.tests_run += 1
        if status == "PASS":
            self.tests_passed += 1
        
        result = {
            "test": name,
            "status": status,
            "details": details,
            "timestamp": datetime.now().isoformat()
        }
        self.test_results.append(result)
        status_icon = "✅" if status == "PASS" else "❌"
        print(f"{status_icon} {name}: {status}")
        if details:
            print(f"   {details}")

    def test_api_root(self):
        """Test API root endpoint"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            if response.status_code == 200 and "Bravia Engenharia API" in response.text:
                self.log_test("API Root Endpoint", "PASS", f"Status: {response.status_code}")
                return True
            else:
                self.log_test("API Root Endpoint", "FAIL", f"Status: {response.status_code}, Response: {response.text[:200]}")
                return False
        except Exception as e:
            self.log_test("API Root Endpoint", "FAIL", f"Exception: {str(e)}")
            return False

    def test_contact_form_submission(self):
        """Test contact form POST endpoint"""
        test_data = {
            "company": "Test Company Ltd",
            "name": "João Silva",
            "email": "joao.silva@testcompany.com",
            "phone": "+55 11 99999-9999",
            "service": "Fabricação de Estruturas Metálicas",
            "area": "Petróleo e Gás",
            "message": "Teste de integração do formulário de contato"
        }

        try:
            response = requests.post(
                f"{self.api_url}/contact",
                json=test_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                response_data = response.json()
                if response_data.get("id") and response_data.get("email") == test_data["email"]:
                    self.log_test("Contact Form Submission", "PASS", f"Contact created with ID: {response_data.get('id')}")
                    return response_data.get("id")
                else:
                    self.log_test("Contact Form Submission", "FAIL", "Response missing required fields")
                    return None
            else:
                self.log_test("Contact Form Submission", "FAIL", f"Status: {response.status_code}, Response: {response.text[:200]}")
                return None
                
        except Exception as e:
            self.log_test("Contact Form Submission", "FAIL", f"Exception: {str(e)}")
            return None

    def test_contact_form_validation(self):
        """Test contact form validation with invalid data"""
        # Test missing required fields
        invalid_data = {
            "company": "Test Company",
            "name": "",  # Missing name
            "email": "invalid-email",  # Invalid email format
            "service": "",  # Missing service
            "area": "",  # Missing area
            "message": ""  # Missing message
        }

        try:
            response = requests.post(
                f"{self.api_url}/contact",
                json=invalid_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code in [400, 422]:  # Expecting validation error
                self.log_test("Contact Form Validation", "PASS", f"Correctly rejected invalid data with status: {response.status_code}")
                return True
            else:
                self.log_test("Contact Form Validation", "FAIL", f"Should reject invalid data but got status: {response.status_code}")
                return False
                
        except Exception as e:
            self.log_test("Contact Form Validation", "FAIL", f"Exception: {str(e)}")
            return False

    def test_get_contacts(self):
        """Test GET contacts endpoint"""
        try:
            response = requests.get(f"{self.api_url}/contacts", timeout=10)
            
            if response.status_code == 200:
                contacts = response.json()
                if isinstance(contacts, list):
                    self.log_test("Get Contacts Endpoint", "PASS", f"Retrieved {len(contacts)} contacts")
                    return True
                else:
                    self.log_test("Get Contacts Endpoint", "FAIL", "Response is not a list")
                    return False
            else:
                self.log_test("Get Contacts Endpoint", "FAIL", f"Status: {response.status_code}")
                return False
                
        except Exception as e:
            self.log_test("Get Contacts Endpoint", "FAIL", f"Exception: {str(e)}")
            return False

    def test_cors_headers(self):
        """Test CORS headers are properly set"""
        try:
            response = requests.options(f"{self.api_url}/contact", timeout=10)
            
            cors_headers = {
                'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
                'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
                'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers')
            }
            
            if any(cors_headers.values()):
                self.log_test("CORS Headers", "PASS", f"CORS headers present: {cors_headers}")
                return True
            else:
                self.log_test("CORS Headers", "FAIL", "No CORS headers found")
                return False
                
        except Exception as e:
            self.log_test("CORS Headers", "FAIL", f"Exception: {str(e)}")
            return False

    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Bravia Engenharia Backend API Tests")
        print(f"🌐 Testing API at: {self.api_url}")
        print("=" * 60)

        # Test API availability
        if not self.test_api_root():
            print("❌ API is not accessible, stopping tests")
            return False

        # Test core functionality
        self.test_contact_form_submission()
        self.test_contact_form_validation()
        self.test_get_contacts()
        self.test_cors_headers()

        # Print summary
        print("\n" + "=" * 60)
        print(f"📊 Tests completed: {self.tests_passed}/{self.tests_run} passed")
        print(f"✅ Success rate: {(self.tests_passed/self.tests_run)*100:.1f}%")
        
        return self.tests_passed == self.tests_run

def main():
    """Main test execution"""
    tester = BraviaAPITester()
    success = tester.run_all_tests()
    
    # Save results to file
    with open("/tmp/backend_test_results.json", "w") as f:
        json.dump(tester.test_results, f, indent=2)
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())