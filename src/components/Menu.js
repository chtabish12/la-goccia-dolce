import React, { useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetch("/src/data/menu.json")
      .then((res) => res.json())
      .then(setMenu);
  }, []);

  if (!menu) return <div>Loading menu...</div>;

  return (
    <div>
      {Object.entries(menu).map(([section, items]) => (
        <div key={section} className="menu-section">
          <h2>{section}</h2>
          <ul className="menu-list">
            {items.map((item, i) => (
              <li key={i} className="menu-item">
                <div className="menu-item-details">
                  <div className="menu-item-name">{item.name}</div>
                  <div className="menu-item-description">{item.description}</div>
                </div>
                <div className="menu-item-price">{item.price}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;