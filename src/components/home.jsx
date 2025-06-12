import React, { useState } from "react";
import "./drag.css";

export default function DragTabs() {
  const [tabs, setTabs] = useState(["แท็บ 1", "แท็บ 2", "แท็บ 3"]);
  const [bottomTabs, setBottomTabs] = useState([]);
  const [draggedTab, setDraggedTab] = useState(null);
  const [fromBottom, setFromBottom] = useState(false);

  const onDragStartTop = (index) => {
    setDraggedTab(tabs[index]);
    setFromBottom(false);
  };

  const onDragStartBottom = (index) => {
    setDraggedTab(bottomTabs[index]);
    setFromBottom(true);
  };

  const onDropTop = () => {
    if (!draggedTab) return;
    if (fromBottom) {
      setBottomTabs(bottomTabs.filter((tab) => tab !== draggedTab));
      setTabs([...tabs, draggedTab]);
    }
    setDraggedTab(null);
  };

  const onDropBottom = () => {
    if (!draggedTab) return;
    if (!fromBottom) {
      setTabs(tabs.filter((tab) => tab !== draggedTab));
      setBottomTabs([...bottomTabs, draggedTab]);
    }
    setDraggedTab(null);
  };

  return (
    <>
      <div
        className="tab-container"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDropTop}
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="tab"
            draggable
            onDragStart={() => onDragStartTop(index)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div
        className="bottom-drop-area"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDropBottom}
      >
        {bottomTabs.map((tab, index) => (
          <div
            key={index}
            className="tab dropped"
            draggable
            onDragStart={() => onDragStartBottom(index)}
          >
            {tab}
            <span className="label">มีสอบ</span>
          </div>
        ))}
      </div>
    </>
  );
}
