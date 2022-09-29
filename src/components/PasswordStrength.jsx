import { useState } from "react"

const PasswordStrength = ({strength}) => {
    const [passwordStrengthLevel, setPasswordStrengthLevel] = useState("Weak")
    const calculateStrengthLevel = () => {

        switch (strength){
            case 0:
                setPasswordStrengthLevel("Weak")
                break
            case 1:
                setPasswordStrengthLevel("Medium")
                break
            case 2:
                setPasswordStrengthLevel("Strong")
                break
            case 3:
                setPasswordStrengthLevel("Spuer Strong")
                break
            case 4:
                setPasswordStrengthLevel("Extremely Strong")
                break
            default:
                setPasswordStrengthLevel("Waiting for parameters")
                break
        }

    }

    return (
        <div>
            <div></div>
            <div>
                {[...Array(5)].map((level, index) => {
                    index += 1
                    return (
                        <button
                        type="button"
                        key={index}
                        ></button>
                    )
                })}
            </div>
        </div>
    )
}

export default PasswordStrength