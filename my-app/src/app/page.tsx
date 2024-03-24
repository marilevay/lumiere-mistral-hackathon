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
    <div className="aspect-w-16 aspect-h-9 min-h-screen overflow-hidden flex justify-center items-center">
      <div className="w-2/3 h-2/3">
        <Card className="p-6 m-5 content-center">
        <CardContent className="p-6">
        <div className="flex justify-center items-center m-8">
            <iframe src="https://lottie.host/embed/d16e4fcb-fddd-44b8-9ced-18606864327b/qhZRJNqBpV.json" className="absolute bottom-100 right-100 h-1/2 w-1/2"></iframe>
            <h1 className="text-4xl text-white z-10">Lumiere</h1>
        </div>
        </CardContent>
      </Card>
      <div className="flex justify-around text-center">
        <Button variant="outline" className="border border-gray-400 text-gray-500 hover:text-gray-700 m-3 mx-2 w-1/5 rounded-full flex justify-center items-center">Cache 1</Button>
        <Button variant="outline" className="border border-gray-400 text-gray-500 hover:text-gray-700 m-3 mx-2 w-1/5 rounded-full flex justify-center items-center">Cache 2</Button>
        <Button variant="outline" className="border border-gray-400 text-gray-500 hover:text-gray-700 m-3 mx-2 w-1/5 rounded-full flex justify-center items-center">Cache 3</Button>
        <Button variant="outline" className="border border-gray-400 text-gray-500 hover:text-gray-700 m-3 mx-2 w-1/5 rounded-full flex justify-center items-center">Cache 4</Button>
      </div>
      <div className="flex justify-center text-center gap-4">
        <Button variant="outline" className="border border-gray-400 text-gray-500 hover:text-gray-700 m-3 w-1/5 rounded-full flex justify-center items-center">Cache 5</Button>
        <Button variant="outline" className="border border-gray-400 text-gray-500 hover:text-gray-700 m-3 w-1/5 rounded-full flex justify-center items-center">Cache 6</Button>
      </div>
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
