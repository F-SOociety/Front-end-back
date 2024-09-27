export default function Footer() {
    return (
      <footer className="bg-[#0a1128] text-white py-6">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Blog</a>
            <a href="#" className="hover:text-gray-300">Pages</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </nav>
          <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>Copyright 2024, all right reserved</p>
            <div className="mt-2 sm:mt-0">
              <a href="#" className="hover:text-gray-300 mr-4">privacy policy</a>
              <a href="#" className="hover:text-gray-300">Terms & condition</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  