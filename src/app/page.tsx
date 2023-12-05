"use client"
import Image from 'next/image'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import Wellcome from "@/components/Wellcome";
import UserForm from '@/components/UserForm'
import SocialForm from '@/components/SocialForm'
import CompanyForm from '@/components/CompanyForm'
import DigitalForm from '@/components/DigitalForm'
import Thanks from '@/components/Thanks'

//Hooks
import {useForm} from '@/hooks/UseForm'


export default function Home() {
  const formComponents = [
    // eslint-disable-next-line react/jsx-key
    <Wellcome/>,
    // eslint-disable-next-line react/jsx-key
    <UserForm/>,
    // eslint-disable-next-line react/jsx-key
    <SocialForm/>,
    // eslint-disable-next-line react/jsx-key
    <CompanyForm/>,
    // eslint-disable-next-line react/jsx-key
    <DigitalForm/>,
    // eslint-disable-next-line react/jsx-key
    <Thanks/>,
  ];

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents);
  return (
    <main>
      <div className="form-container">
        <p>Etapas</p>

        <form onSubmit={(e) => changeStep(currentStep + 1, e) }>
          <div className="inputs-container">
            {currentComponent}
          </div>

          <div className="action">
            {!isFirstStep && (
                <button type="button" onClick={() => changeStep(currentStep - 1)}>
                  <GrFormPrevious/>
                  <span>Voltar</span>
                </button>
              )
            }

            {!isLastStep ? (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext/>
                </button>
              ) : (
                <button type="submit">
                  <span>Enviar</span>
                  <FiSend/>
                </button>
              )
            }
          </div>

        </form>
      </div>
    </main>
  )
}
