import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@hooks/useScrollReveal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle,
  Github, Linkedin, Twitter, Copy, Check
} from 'lucide-react';

// ✅ Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { ref, style } = useScrollReveal();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('sohailsardar@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sohailsardarsearle@gmail.com',
      action: copyEmailToClipboard,
      isCopied: copiedEmail
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0525383108',
      href: '0525383108'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: 'https://maps.google.com/?q=Lahore'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', url: '', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/sohailsardar', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/sohail_sardar', icon: Twitter }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div ref={ref} style={style} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Let’s Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6 space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Contact Details</h3>

            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{info.label}</p>
                    {info.action ? (
                      <button
                        onClick={info.action}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary flex items-center space-x-1"
                      >
                        <span>{info.value}</span>
                        {info.isCopied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    ) : (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map(({ name, url, icon: Icon }, i) => (
                <motion.a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-md hover:bg-white/10"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Send a Message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {['name', 'email', 'subject'].map((field) => (
                <div key={field}>
                  <input
                    {...register(field)}
                    placeholder={
                      field === 'name' ? 'Your Name' :
                      field === 'email' ? 'your@email.com' : 'Subject'
                    }
                    className={`form-input ${errors[field] ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors[field] && (
                    <p className="form-error">{errors[field]?.message}</p>
                  )}
                </div>
              ))}

              <div>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Write your message..."
                  className={`form-input ${errors.message ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.message && <p className="form-error">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-primary text-white rounded-lg font-semibold shadow hover:shadow-lg transition"
                whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </motion.button>
            </form>

            {/* Status Message */}
            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className={`mt-4 p-3 rounded-lg flex items-center space-x-2 text-sm ${
                    submitStatus === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                  }`}
                >
                  {submitStatus === 'success' ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                  <span>
                    {submitStatus === 'success'
                      ? 'Message sent successfully!'
                      : 'Failed to send message. Please try again.'}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
