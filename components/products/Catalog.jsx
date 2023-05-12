import { useEffect, useState } from "react";
import Box from "./Box";
import products from "../../data/proddata.json";

export default function Catalog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/catalog");
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-row max-w-7xl mx-auto my-20 space-x-5">
        <div className="min-w-[300px]">
          <div className="space-y-2">
            <div className="flex flex-row justify-between">
              <div className="text-custom-4">Categories</div>
              <div className="text-[#595959]">Reset</div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-row space-x-4">
                <input type="checkbox" />
                <div className="flex flex-row w-full justify-between">
                  <div>All categories</div>
                  <div>10</div>
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <input type="checkbox" />
                <div className="flex flex-row w-full justify-between">
                  <div>Tablet</div>
                  <div>5</div>
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <input type="checkbox" />
                <div className="flex flex-row w-full justify-between">
                  <div>Laptop</div>
                  <div>5</div>
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <input type="checkbox" />
                <div className="flex flex-row w-full justify-between">
                  <div>Headphones</div>
                  <div>5</div>
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <input type="checkbox" />
                <div className="flex flex-row w-full justify-between">
                  <div>Console</div>
                  <div>5</div>
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <input type="checkbox" />
                <div className="flex flex-row w-full justify-between">
                  <div>other</div>
                  <div>5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Box items={data} />
        </div>
      </div>
    </>
  );
}
