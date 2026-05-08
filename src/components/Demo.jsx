function Demo() {
  return (
    <nav className="bg-blue-300 p-4">
      <ul className="flex space-x-6 text-black capitalize">
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        
        <li className="relative group cursor-pointer">
          <span className="hover:border-b-2 border-blue-500">Men</span>
          

          {/* Dropdown */}
          <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-all duration-300">
            
            <p className="px-4 py-2 hover:bg-gray-100">Option 1</p>
            <p className="px-4 py-2 hover:bg-gray-100">Option 2</p>
            <p className="px-4 py-2 hover:bg-gray-100">Option 3</p>
          
          </div>
        </li>

      </ul>
    </nav>
  );
}

export default Demo;