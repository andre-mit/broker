"use client";
import DefaultHeader from "@/components/base/default-header";
import Map from "@/components/maps/map";
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
import { useRef } from "react";
import Container from "@/components/ui/container";

export default function Home() {
  const searchInputRef = useRef(null);

  return (
    <>
      <main className="flex flex-col items-center justify-between gap-8 h-screen">
      <DefaultHeader />
        <Container>
          <form
            action="#"
            className="flex items-center justify-between w-full p-4 bg-gray-300 bg-opacity-10 rounded-xl shadow-md gap-4"
          >
            <div>
              <input
                type="text"
                ref={searchInputRef}
                className="bg-gray-200 focus:bg-gray-300 dark:bg-gray-700 dark:focus:bg-gray-600 p-2 w-full rounded flex-1 text-xl border-none outline-none transition-colors"
                placeholder="Pesquisa"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-200 hover:bg-gray-400 dark:bg-gray-500 dark:hover:bg-gray-600 transition-colors shadow-md px-4 py-2 rounded"
            >
              Pesquisar
            </button>
          </form>
        </Container>

        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={70}>
            <ScrollArea className="h-full px-4 rounded-md border p-4">
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
          <ResizablePanel className="pl-2">
            <Map inputSearchRef={searchInputRef} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </>
  );
}
