import AdminAuth from "../components/AdminAuth"
import Quote from "../components/Quote"

const AdminSignup = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <AdminAuth type="signup" />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  )
}

export default AdminSignup
