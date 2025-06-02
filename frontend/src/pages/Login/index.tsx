import { useState } from "react";
import axios from "axios";
import Logo from "../../assets/Logo-bright.svg";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post("http://localhost:3000/users/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      console.log("Login success:", response.data);
      // aqui pode redirecionar ou salvar token etc

    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Erro ao tentar logar.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center relative justify-center font-roboto-100 min-h-screen w-sc bg-primary-100 to-neutrals-200">
      <div
        className="w-full h-1/3 bg-white absolute bottom-20"
        style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
      ></div>
      <div className="w-full h-20 bg-white absolute bottom-0 "></div>

      <div className="min-w-[300px] w-1/3 h-2/3 min-h-[500px] z-20 bg-white rounded-3xl px-12 shadow-neutrals-200/10 shadow-xl p-4">
        <div className="h-1/3 min-h-[150px] w-full flex justify-center items-center flex-col gap-4">
          <img src={Logo} alt="Logo" className="w-24 mb-4" />
          <h1 className="w-full justify-center text-center font-bold text-neutrals-200 text-2xl">
            Seja Bem Vindo(a)
          </h1>
          <h1 className="w-full justify-center text-center font-medium text-neutrals-200/70">
            Coloque suas credenciais e autentique-se para administrar o perfil
            de sua cidade
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl flex flex-col justify-start items-center h-2/3 min-h-[300px] w-full z-20 mt-10 bg-white"
        >
          <label htmlFor="Email" className="font-roboto-100 font-bold w-full">
            Email
            <input
              type="text"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 rounded-2xl mt-2 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
              required
            />
          </label>
          <label
            htmlFor="Password"
            className="font-roboto-100 w-full font-bold mt-4"
          >
            Senha
            <input
              type="password"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 rounded-2xl mt-2 border-neutrals-200/30 outline-0 px-2 font-normal p-1"
              required
            />
          </label>

          {error && (
            <div className="text-red-600 mt-4 text-center w-full">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="text-2xl font-bold w-full h-10 bg-primary-100 text-neutrals-200 duration-200 hover:shadow-primary-100/50 cursor-pointer mt-auto rounded-3xl shadow-xl shadow-primary-100/20 disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
