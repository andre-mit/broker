"use client";
import DefaultHeader from "@/components/base/default-header";
import Map from "@/components/maps/map";
import { Slider } from "@/components/ui/slider";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <>
      <DefaultHeader />

      <main className="flex flex-col items-center justify-between p-24 gap-8">
        <form
          action="#"
          className="flex items-center justify-between w-full p-4 bg-gray-300 bg-opacity-10 rounded-xl shadow-md gap-4"
        >
          <div>
            <label htmlFor="neighborhood">Neighborhood</label>
            <select name="neighborhood" id="neighborhood">
              <option value="all">All</option>
              <option value="downtown">Downtown</option>
              <option value="uptown">Uptown</option>
              <option value="midtown">Midtown</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">Price Range</label>
            <Slider
              defaultValue={[0, 10000]}
              min={0}
              step={1000}
              max={10000}
              className="w-full"
            />
          </div>
          <button type="submit">Search</button>
        </form>

        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={70}>
            <ScrollArea className="h-[600px] px-4 rounded-md border p-4">
              <ul>
                <li>
                  <Card>
                    <CardHeader>
                      <CardTitle>Property Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Property Description</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <button>View</button>
                    </CardFooter>
                  </Card>
                </li>
                <li>
                  <Card>
                    <CardHeader>
                      <CardTitle>Property Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Property Description</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <button>View</button>
                    </CardFooter>
                  </Card>
                </li>
                <li>
                  <Card>
                    <CardHeader>
                      <CardTitle>Property Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Property Description</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <button>View</button>
                    </CardFooter>
                  </Card>
                </li>
                <li>
                  <Card>
                    <CardHeader>
                      <CardTitle>Property Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Property Description</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <button>View</button>
                    </CardFooter>
                  </Card>
                </li>
                <li>
                  <Card>
                    <CardHeader>
                      <CardTitle>Property Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Property Description</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <button>View</button>
                    </CardFooter>
                  </Card>
                </li>
                <li>
                  <Card>
                    <CardHeader>
                      <CardTitle>Property Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Property Description</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <button>View</button>
                    </CardFooter>
                  </Card>
                </li>
                <li>
                  <Card>
                    <CardHeader>
                      <CardTitle>Property Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Property Description</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <button>View</button>
                    </CardFooter>
                  </Card>
                </li>
                <li>
                  <Card>
                    <CardHeader>
                      <CardTitle>Property Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Property Description</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <button>View</button>
                    </CardFooter>
                  </Card>
                </li>
                <li>
                  <Card>
                    <CardHeader>
                      <CardTitle>Property Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Property Description</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <button>View</button>
                    </CardFooter>
                  </Card>
                </li>
                <li>
                  <Card>
                    <CardHeader>
                      <CardTitle>Property Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Property Description</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <button>View</button>
                    </CardFooter>
                  </Card>
                </li>
              </ul>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel className="p-2">
            <Map />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </>
  );
}
