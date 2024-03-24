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
    <div className="aspect-w-16 aspect-h-9 min-h-screen bg-orange-100 overflow-hidden flex justify-center items-center">
      <div className="w-3/4 h-3/4">
        <Card className="p-8 m-10">
        <CardContent className="p-6 pt-40 grid grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-center">iFrame</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="m-5 text-center">MC Prompt</p>
            <Button variant="outline" className="rounded-lg pl-3 m-2 text-left">
              Option A
            </Button>
            <Button variant="outline" className="rounded-lg pl-3 m-2 text-left">
              Option B
            </Button>
            <Button variant="outline" className="rounded-lg pl-3 m-2 text-left">
              Option C
            </Button>
            <Button variant="outline" className="rounded-lg pl-3 m-2 text-left">
              Option D
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="absolute top-2 left-0 -mt-16 -ml-16 w-40 h-40 bg-red-500 rounded-full opacity-50 shadow-lg"></div>
      <div className="absolute top-2 left-16 -mt-10 w-20 h-20 bg-orange-400 rounded-full opacity-50 shadow-lg"></div>
      <div className="absolute top-5 left-14 -mt-2 -ml-2 w-20 h-20 bg-yellow-400 rounded-full opacity-50 shadow-lg"></div>
      <div className="absolute bottom-10 right-0 -mb-16 -mr-16 w-40 h-40 bg-red-500 rounded-full opacity-50 shadow-lg"></div>
      <div className="absolute bottom-2 right-10 -mb-10 ml-5 w-20 h-20 bg-orange-400 rounded-full opacity-50 shadow-lg"></div>
      <div className="absolute bottom-5 right-14 -mb-2 -mr-2 w-20 h-20 bg-yellow-500 rounded-full opacity-50 shadow-lg"></div>
      </div>
    </div>
  );
}
