import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen aspect-w-16 aspect-h-9 bg-orange-100 overflow-visible relative">
      <div className="m-5">
        <Card className="p-5 bg-center mb-5">
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center">
              <p>iFrame</p>
              {/* Add more content for Column 1 */}
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="m-5">MC Prompt</p>
              <Button variant="outline" className="rounded-lg px-20 pl-3 m-1">Option A</Button>
              <Button variant="outline" className="rounded-lg px-20 pl-3 m-1">Option B</Button>
              <Button variant="outline" className="rounded-lg px-20 pl-3 m-1">Option C</Button>
              <Button variant="outline" className="rounded-lg px-20 pl-3 m-1">Option D</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="absolute top-2 left-0 -mt-16 -ml-16 w-40 h-40 bg-red-500 rounded-full opacity-50 shadow-lg" ></div>
      <div className="absolute top-2 left-16 -mt-10 w-20 h-20 bg-orange-400 rounded-full opacity-50 shadow-lg"></div>
      <div className="absolute top-5 left-14 -mt-2 -ml-2 w-20 h-20 bg-yellow-400 rounded-full opacity-50 shadow-lg"></div>
      <div className="absolute bottom-10 right-0 -mb-16 -mr-16 w-40 h-40 bg-red-500 rounded-full opacity-50 shadow-lg" ></div>
      <div className="absolute bottom-2 right-10 -mb-10 ml-5 w-20 h-20 bg-orange-400 rounded-full opacity-50 shadow-lg"></div>
      <div className="absolute bottom-5 right-14 -mb-2 -mr-2 w-20 h-20 bg-yellow-500 rounded-full opacity-50 shadow-lg"></div>
  </div>  
  );
}
