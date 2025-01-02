// ujdgVRE7STRoODG7
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Login = () => {
    const [signupInput, setSignupInput] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [loginInput, setLoginInput] = useState({
        email: "",
        password: ""
    });
    const changeInputHandler = (e, type) => {
        const {name, value} = e.target;
        if (type === "signup") {
            setSignupInput({...signupInput, [name]: value});
        } else {
            setLoginInput({...loginInput, [name]: value})
        }
    };
    const handleRegistration = (type) => {
        const inputData = type === "signup" ? signupInput : loginInput;
        console.log(inputData);
    }
  return (
    <div className="flex items-center w-full justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Registrarse</TabsTrigger>
          <TabsTrigger value="login">Iniciar sesión</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Registrarse</CardTitle>
              <CardDescription>
                Crea una nueva cuenta y haz clic en Registrarse cuando hayas
                terminado.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  type="text"
                  name="name"
                  value={signupInput.name}
                  onChange={(e)=>changeInputHandler(e, "signup")}
                  placeholder="Ingresa tu nombre"
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={signupInput.email}
                  onChange={(e)=>changeInputHandler(e, "signup")}
                  placeholder="Ingresa tu email"
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Contraseña</Label>
                <Input
                  type="password"
                  name="password"
                  value={signupInput.password}
                  onChange={(e)=>changeInputHandler(e, "signup")}
                  placeholder="Ingresa tu contraseña"
                  required="true"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleRegistration("signup")}>Registrarse</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Iniciar sesión</CardTitle>
              <CardDescription>
                Ingresa tu contraseña aquí. Después de registrarte, iniciarás
                sesión automáticamente.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={loginInput.email}
                  onChange={(e)=>changeInputHandler(e, "login")}
                  placeholder="Ingresa tu email"
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Contraseña</Label>
                <Input
                  type="password"
                  name="password"
                  value={loginInput.password}
                  onChange={(e)=>changeInputHandler(e, "login")}
                  placeholder="Ingresa tu contraseña"
                  required="true"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleRegistration("login")}>Iniciar sesión</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
