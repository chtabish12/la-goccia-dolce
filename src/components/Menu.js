import React, { useEffect, useState } from "react";
import menuData from "../data/menu.json"; // Direct import for Create React App

const Menu = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    // Direct import works instantly
    setMenu(menuData);
  }, []);

  if (!menu) return <div className="menu-loading">Loading menu...</div>;

  return (
    <div className="menu-container">
      {Object.entries(menu).map(([section, items]) => (
        <div key={section} className="menu-section">
          <h2 className="menu-heading">{section}</h2>
          <ul className="menu-list">
            {items.map((item, i) => (
              <li key={i} className="menu-item">
                <div>
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-description">{item.description}</span>
                </div>
                <span className="menu-item-price">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;