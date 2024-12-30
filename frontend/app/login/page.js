"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (username === "admin" && password === "admin123") {
      router.push("/dashboard?userType=admin");
    } else if (username === "szborok" && password === "Kawl3377") {
      router.push("/dashboard?userType=worker");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen subtle-gradient">
      <Card className="w-[350px] bg-card/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            CNC Tool Planner
          </CardTitle>
          <CardDescription className="text-center">
            Login to access your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-input/70"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-input/70"
                />
              </div>
            </div>
          </form>
          {error && (
            <p className="text-destructive mt-2 text-center text-sm">{error}</p>
          )}
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
      <div className="absolute bottom-4 text-center w-full text-muted-foreground text-sm">
        Powered by BRK Solutions
      </div>
    </div>
  );
}
