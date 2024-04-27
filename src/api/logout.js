export function Logout(Provider) {
    switch (Provider) {
        case "TUTOR":
            localStorage.removeItem("tutor_data")
        case "STUDENT":
            localStorage.removeItem("student_data")
        
    }
}