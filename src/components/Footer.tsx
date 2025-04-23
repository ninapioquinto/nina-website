
const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Luna • AI Automation Developer
          </div>
          <div className="text-white/50 text-sm">
            Designed & Built with 💜
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
