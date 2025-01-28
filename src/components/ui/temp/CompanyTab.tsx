import { Button, Form, Input, Space, Switch } from "antd";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import { BiTrash } from "react-icons/bi";
import BleuButton from "../button/BleuButton";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface Item {
  id: number;
  text: string;
  visible: boolean;
}

const CompanyTab = () => {
  const [content, setContent] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const Editor = useRef(null);

  // Add item handler
  const handleAddItem = () => {
    if (!inputValue.trim()) return;
    setItems([
      ...items,
      {
        id: Date.now(),
        text: inputValue.trim(),
        visible: true,
      },
    ]);
    setInputValue(""); // Clear the input
  };

  // Delete item handler
  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Toggle visibility handler
  const handleToggleVisibility = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, visible: !item.visible } : item
      )
    );
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex justify-between">
        <h2 className="my-4 text-left text-2xl font-bold text-black"></h2>
      <button className="bg-[#ffb200] mb-3 mt-2 w-18 h-9 text-black rounded">
        Save
      </button>
        </div>
      

      {/* <div className="absolute -top-20 right-5 flex items-center gap-3">
          <BleuButton title="Save" />
        </div> */}
        <div className="flex gap-2">
          {/* Left Sidebar */}
          
          <div className="min-w-[200px] bg-white p-3 rounded-md h-[37.5rem]">
          
            <Form className="flex flex-col gap-4">
              {/* Add Item Form */}
              <Space.Compact>
                <Form.Item name={["search-field"]} noStyle>
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{ padding: "10px", width: "100%", 
                      color: "black", background: "white",
                      outlineWidth: "0"  }}
                    placeholder="Enter item"
                  />
                </Form.Item>
                <Form.Item noStyle>
                  <Button
                    style={{
                      background: "#ffb200",
                      border: "0",
                      display: "flex",
                      alignItems: "center",
                      padding: "25px",
                      color: "black"                      
                    }}
                    onClick={handleAddItem}
                  >
                    Add
                  </Button>
                </Form.Item>
              </Space.Compact>

              {/* List Items */}
              {items.map((item) => (
                <Space.Compact key={item.id} className="border border-[#ffb200] rounded-lg">
                  <Form.Item noStyle>
                    <Input
                      value={item.visible ? item.text : "*****"}
                      readOnly
                      style={{
                        padding: "10px",
                        width: "100%",
                        border: "none",
                        outline: "none",
                      }}
                    />
                  </Form.Item>
                  <Form.Item noStyle>
                    <div className="flex items-center gap-2">
                      <Switch
                        style={{
                          background: "#ffb200",
                        }}
                        checked={item.visible}
                        onChange={() => handleToggleVisibility(item.id)}
                      />
                      <BiTrash
                        className="text-red text-2xl cursor-pointer"
                        onClick={() => handleDeleteItem(item.id)}
                      />
                    </div>
                  </Form.Item>
                </Space.Compact>
              ))}
            </Form>
          </div>

          {/* Main Content Area */}
          <div className="md:h-screen flex-1 rounded-md">
            
            <form action="" className="relative">
              
              <span className="">
                <JoditEditor
                  ref={Editor}
                  value={content}
                  config={{
                    height: 600,
                  }}
                  onBlur={(newContent) => setContent(newContent)}
                />
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTab;
