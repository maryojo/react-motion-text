import React from 'react';

const Sidebar = ({ items, activeItem, onSelectItem }) => {
  const textItems = items.filter(item => item.category === 'Text');
  const numberItems = items.filter(item => item.category === 'Numbers');

  const renderCategory = (title, categoryItems) => (
    <div className="mb-8">
      <h3 className="text-sm font-bold text-[#c25777] uppercase tracking-wider mb-3 px-4 geom">{title}</h3>
      <div className="space-y-2">
        {categoryItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectItem(item.id)}
            className={`w-full text-left px-4 py-3 mx-2 rounded-lg transition-all duration-200 font-medium ${
              activeItem === item.id
                ? 'bg-[#dc5980] text-white shadow-lg'
                : 'text-gray-500 hover:bg-white/10'
            }`}
          >
            <span className="font-semibold">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <aside className="w-64 bg-gradient-to-b from-gray-900 to-black border-r border-white/10 h-screen overflow-y-auto sticky top-0">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-8 geom">Components</h2>
        
        {renderCategory('Text', textItems)}
        {renderCategory('Numbers', numberItems)}
      </div>
    </aside>
  );
};

export default Sidebar;
