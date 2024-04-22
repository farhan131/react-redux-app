import { useState } from "react";

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(email)
}

export default function HeroSection() {
    const [formValues, setFormValues] = useState({
        email: '',
    })

    const handleFormChanges = (e) => {
        const { name, value } = e.target
        setFormValues(prevFormValues => {
            return { ...prevFormValues, [name]: value }
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const { email } = formValues
        let alertText

        if (email) {
            const emailValid = validateEmail(email)
            if (emailValid) {
                alertText = 'Thanks for signing up.'
            }
            if (!emailValid) {
                alertText = 'Please enter a valid email address.'
            }
        }
        alert(alertText)
    }
    
    return (
        <section id="hero" className="hero">

            <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <h2 data-aos="fade-up" data-aos-delay="100">Welcome to Our Website</h2>
                        <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Bootstrap</p>
                    </div>
                    <div className="col-lg-5">
                        <form className="sign-up-form d-flex" data-aos="fade-up" data-aos-delay="300" onSubmit={handleFormSubmit}>
                            <input name="email" type="text" className="form-control" placeholder="Enter email address" value={formValues.email} onChange={handleFormChanges} />
                            <input name="submit" type="submit" className="btn btn-primary" value="Sign up" />
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}
