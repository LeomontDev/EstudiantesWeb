import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked } from '@coreui/icons'
//import { useAuth } from 'src/hooks/useAuth'
import Swal from 'sweetalert2'

const Register = () => {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [pwd2, setPwd2] = useState('')

  //const { register } = useAuth()

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  }

  const validatePasswordChars = (pass) => {
    return String(pass)
      .toLowerCase()
      .match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
  }

  const handleRegister = async () => {
    if (email === '' || pwd === '' || pwd2 === '') {
      Swal.fire({
        text: 'Debe llenar todos los campos',
        icon: 'error',
      })
      return
    }

    if (pwd !== pwd2) {
      Swal.fire({
        text: 'Las claves no coinciden',
        icon: 'error',
      })
      return
    }

    if (!validateEmail(email)) {
      Swal.fire({
        text: 'Debe ingresar un correo electronico',
        icon: 'error',
      })
      return
    }

    if (!validatePasswordChars(pwd)) {
      Swal.fire({
        text: 'Debe ingresar una contraseña de 6 a 16 caracteres, con al menos 1 letra y 1 numero',
        icon: 'error',
      })
      return
    }

    console.log({ email, pwd, pwd2 })
    /* if (continuar)
      register({ email, password: clave }) */
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Registro</h1>
                  <p className="text-medium-emphasis">Crea tu cuenta</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      type="email"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Contraseña"
                      autoComplete="new-password"
                      value={pwd}
                      onChange={(e) => setPwd(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repetir contraseña"
                      autoComplete="new-password"
                      value={pwd2}
                      onChange={(e) => setPwd2(e.target.value)}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton onClick={handleRegister} color="success">
                      Crear cuenta
                    </CButton>
                  </div>
                  <hr />
                  <div className="d-grid">
                    <CButton
                      color="primary"
                      onClick={() => {
                        window.location.href = '#/login'
                      }}
                    >
                      Ingresar a tu cuenta
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
