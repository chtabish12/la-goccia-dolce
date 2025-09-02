import React, { useEffect, useState } from "react";

// Helper: returns true if any item in the section has multiple prices (for drinks table)
function hasMultiplePrices(items) {
  return items.some(item =>
    Object.keys(item).filter(k => k.startsWith("price_")).length > 1
  );
}

// Helper: pretty label for price fields
function priceLabel(key) {
  // Custom labels for your drinks
  if (key === "price_classic") return "Classic";
  if (key === "price_grande") return "Grande";
  if (key === "price_16oz") return "16oz";
  if (key === "price_20oz") return "20oz";
  return key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
}

const Menu = ({ menuData }) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    setMenu(menuData);
  }, [menuData]);

  if (!menu) return <div className="menu-loading">Loading menu...</div>;

  return (
    <div className="menu-container">
      {Object.entries(menu).map(([section, items]) => {
        // Table style for drinks sections with multiple prices
        if (hasMultiplePrices(items)) {
          // Get all price keys for header
          const priceKeys = Object.keys(items[0]).filter(k => k.startsWith("price_"));
          return (
            <div key={section} className="menu-section">
              <h2 className="menu-heading">{section}</h2>
              <table style={{
                width: '100%',
                background: 'var(--card-bg)',
                borderRadius: '14px',
                boxShadow: 'var(--shadow)',
                marginBottom: '2rem',
                borderCollapse: 'separate',
                borderSpacing: 0
              }}>
                <thead>
                  <tr style={{background: 'var(--background)'}}>
                    <th style={{textAlign: 'left', padding: '0.8rem', color: 'var(--primary)', fontSize: '1.07rem'}}></th>
                    {priceKeys.map(pk => (
                      <th key={pk} style={{color: 'var(--secondary)', padding: '0.8rem', fontSize: '1.07rem'}}>{priceLabel(pk)}</th>
                    ))}
                    {/* Show description column if any item has description */}
                    {items.some(it => it.description) && (
                      <th style={{color: '#666', fontSize: '1.07rem', padding: '0.8rem'}}></th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => (
                    <tr key={i} style={{borderBottom: '1px solid #f3e6b3'}}>
                      <td style={{fontWeight: 'bold', color: 'var(--primary)', padding: '0.7rem'}}>{item.name}</td>
                      {priceKeys.map(pk => (
                        <td key={pk} style={{color: 'var(--secondary)', fontWeight: 600, fontSize: '1.09rem', padding: '0.7rem'}}>{item[pk]}</td>
                      ))}
                      {items.some(it => it.description) && (
                        <td style={{color: '#666', fontSize: '1.01rem', padding: '0.7rem'}}>
                          {item.description || ''}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        // Regular food menu style
        return (
          <div key={section} className="menu-section">
            <h2 className="menu-heading">{section}</h2>
            <ul className="menu-list">
              {items.map((item, i) => (
                <li key={i} className="menu-item">
                  <div className="menu-item-details">
                    <span className="menu-item-name">{item.name}</span>
                    {item.description && (
                      <span className="menu-item-description">{item.description}</span>
                    )}
                  </div>
                  {/* Show price or prices */}
                  {item.price ? (
                    <span className="menu-item-price">{item.price}</span>
                  ) : (
                    Object.keys(item)
                      .filter(k => k.startsWith("price_"))
                      .map(pk => (
                        <span key={pk} className="menu-item-price">
                          {priceLabel(pk)}: {item[pk]}
                        </span>
                      ))
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;