import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    service: '',
    area: '',
    message: '',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success(t('contact.form.success'));
      setFormData({
        company: '',
        name: '',
        email: '',
        phone: '',
        service: '',
        area: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = t('contact.serviceOptions', { returnObjects: true });
  const areaOptions = t('contact.areaOptions', { returnObjects: true });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582635081932-3406d309f746')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D3748]/95 to-[#004E89]/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004E89]/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#004E89]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D3748] mb-2">
                      {t('contact.info.address')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('contact.info.addressText')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004E89]/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#004E89]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D3748] mb-2">
                      {t('contact.info.phone')}
                    </h3>
                    <a
                      href="tel:+5522998262171"
                      className="text-gray-600 text-sm hover:text-[#004E89] transition-colors"
                    >
                      +55 22 99826-2171
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004E89]/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[#004E89]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D3748] mb-2">
                      {t('contact.info.email')}
                    </h3>
                    <a
                      href="mailto:comercial@bravia.ind.br"
                      className="text-gray-600 text-sm hover:text-[#004E89] transition-colors"
                    >
                      comercial@bravia.ind.br
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#004E89]/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-[#004E89]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D3748] mb-2">
                      {t('contact.info.hours')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t('contact.info.hoursText')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="company">{t('contact.form.company')} *</Label>
                    <Input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="name">{t('contact.form.name')} *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="email">{t('contact.form.email')} *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="service">{t('contact.form.service')} *</Label>
                    <Select
                      required
                      value={formData.service}
                      onValueChange={(value) => handleChange('service', value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder={t('contact.form.selectService')} />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option, index) => (
                          <SelectItem key={index} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="area">{t('contact.form.area')} *</Label>
                    <Select
                      required
                      value={formData.area}
                      onValueChange={(value) => handleChange('area', value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder={t('contact.form.selectArea')} />
                      </SelectTrigger>
                      <SelectContent>
                        {areaOptions.map((option, index) => (
                          <SelectItem key={index} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mb-6">
                  <Label htmlFor="message">{t('contact.form.message')} *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#004E89] hover:bg-[#003D6B] text-white h-12"
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Bravia Engenharia Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.5!2d-41.7858!3d-22.3767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDIyJzM2LjEiUyA0McKwNDcnMDguOSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
