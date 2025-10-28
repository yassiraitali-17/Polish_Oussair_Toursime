import { useState } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

const ContactMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // CONTACT CONFIGURATION: These are the contact options displayed in the floating contact menu.
  // To update phone number, WhatsApp, or email, modify the values below.
  // Phone: Format is international (e.g., +212707704981 for Morocco)
  // WhatsApp: Format is https://wa.me/PHONE_NUMBER without + or spaces
  // Email: Use mailto: prefix for email links
  const contactOptions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      // PHONE/WHATSAPP CONFIGURATION: Update this phone number to change WhatsApp contact
      action: () => window.open('https://wa.me/212707704981', '_blank'),
    },
    {
      icon: Phone,
      label: 'Call',
      // PHONE CONFIGURATION: Update this phone number to change the call link
      action: () => window.location.href = 'tel:+212707704981',
    },
    {
      icon: Mail,
      label: 'Email',
      // EMAIL CONFIGURATION: Update this email address to change the contact email
      action: () => window.location.href = 'mailto:obenhadya@gmail.com',
    },
  ];

  return (
    <>
      {/* Contact Options Menu */}
      <div className={`fixed bottom-24 right-6 z-50 flex flex-col gap-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        {contactOptions.map((option, index) => (
          <button
            key={option.label}
            onClick={option.action}
            className="bg-white text-[#30a1a6] rounded-full w-12 h-12 shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl"
            style={{
              transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
            }}
            aria-label={option.label}
          >
            <option.icon className="w-5 h-5" />
          </button>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        style={{ backgroundColor: '#e28e38' }}
        aria-label="Contact menu"
      >
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'rotate-90 opacity-100' : 'rotate-0 opacity-100'
        }`}>
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </div>
      </button>
    </>
  );
};

export default ContactMenu;
