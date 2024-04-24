import AdminAuth from "../components/AdminAuth"
import Quote from "../components/Quote"

const AdminSignin = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <AdminAuth type="signin" />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  )
}

export default AdminSignin
