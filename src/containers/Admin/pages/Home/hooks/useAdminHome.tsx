import { usePost } from "@modules/shared/modules/http/hooks"
import { API_ROUTES } from "@modules/shared/routes"
import { useState } from "react"
import { toast } from "react-toastify"
import { AdminLoginDTO } from "../dto/adminLoginDTO.interface"

export function useAdminHome() {
  const [adminLoginForm, setAdminLoginForm] = useState<AdminLoginDTO>({
    email: "",
    password: "",
  })

  const [loginAdmin, { loading }] = usePost<string, AdminLoginDTO>({
    url: API_ROUTES.ADMIN.AUTH.LOGIN,
    onCompleted: (token) => {
      console.log(token)
    },
    onError: () => {
      toast.error(`Hubo un error`)
    },
  })

  const handleChangeAdminForm = (key: keyof AdminLoginDTO, value: string) => {
    setAdminLoginForm({ ...adminLoginForm, [key]: value })
  }

  const handleSubmit = () => {
    loginAdmin({ body: adminLoginForm })
  }

  return { adminLoginForm, handleChangeAdminForm, handleSubmit, loading }
}
