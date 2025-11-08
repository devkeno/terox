import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar } from './ui/calendar';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Calendar as CalendarIcon, Clock, User, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

export function MeetingBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      toast.error('Please select a date and time');
      return;
    }

    if (!formData.name || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    // In a real application, this would send the data to your backend/email service
    console.log('Meeting booking:', {
      date: selectedDate,
      time: selectedTime,
      ...formData
    });

    setIsSubmitted(true);
    toast.success('Meeting request sent successfully!');

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedDate(undefined);
      setSelectedTime('');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-[rgb(17,166,148)] text-white px-4 py-2 rounded-full">
              Book a Meeting
            </span>
          </div>
          <h2 className="mb-6 text-gray-900">
            Schedule a Free Consultation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your project? Choose a date and time that works for you, and let's start building something amazing together.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-12 text-center bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-4 text-gray-900">Meeting Request Sent!</h3>
              <p className="text-gray-600 mb-2">
                Thank you for scheduling a meeting with us. We've received your request and will send you a confirmation email shortly.
              </p>
              <p className="text-gray-500">
                <strong>Note:</strong> In a production environment, you'll receive an automated email confirmation with meeting details.
              </p>
            </Card>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendar Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 bg-gradient-to-br from-gray-50 to-white border-gray-200">
                <div className="flex items-center gap-2 mb-6">
                  <CalendarIcon className="w-5 h-5 text-[rgb(17,166,148)]" />
                  <h3 className="text-gray-900">Select a Date</h3>
                </div>
                
                <div className="flex justify-center mb-8">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={isPastDate}
                    className="rounded-lg border-2 border-gray-200"
                  />
                </div>

                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-[rgb(17,166,148)]" />
                      <h4 className="text-gray-900">Select a Time</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 py-2 rounded-lg text-center transition-all duration-300 ${
                            selectedTime === time
                              ? 'bg-gradient-to-r from-blue-500 to-[rgb(17,166,148)] text-white shadow-lg'
                              : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[rgb(17,166,148)]/30'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 bg-white border-gray-200">
                <h3 className="mb-6 text-gray-900">Your Information</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(17,166,148)] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(17,166,148)] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(17,166,148)] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Tell us about your project
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe what you'd like to discuss..."
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(17,166,148)] focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Selected Date/Time Display */}
                  {selectedDate && selectedTime && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-br from-blue-50 to-teal-50 p-4 rounded-lg border border-blue-100"
                    >
                      <p className="text-gray-700">
                        <strong>Selected:</strong> {selectedDate.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })} at {selectedTime}
                      </p>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-[rgb(17,166,148)] hover:from-blue-600 hover:to-[rgb(17,166,148)]/90 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Request Meeting
                  </Button>

                  <p className="text-gray-500 text-center">
                    <strong>Note:</strong> This is a demo. In production, meeting requests will be sent via email notification.
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        )}

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-blue-100 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h4 className="mb-2 text-gray-900">Flexible Scheduling</h4>
            <p className="text-gray-600">Choose a time that works best for your schedule</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-teal-50 to-white border-teal-100 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[rgb(17,166,148)] to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <User className="w-6 h-6 text-white" />
            </div>
            <h4 className="mb-2 text-gray-900">One-on-One Consultation</h4>
            <p className="text-gray-600">Dedicated time with our expert team</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-emerald-50 to-white border-emerald-100 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h4 className="mb-2 text-gray-900">No Commitment</h4>
            <p className="text-gray-600">Free consultation with no obligations</p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
