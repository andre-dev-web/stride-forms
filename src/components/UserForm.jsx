export default function UserForm() {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input 
          type="text" 
          name="text" 
          id="name" 
          placeholder="Digite seu nome:" 
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Digite seu email:" 
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="number">WhatsApp:</label>
        <input 
          type="number" 
          name="number" 
          id="whatsapp" 
          placeholder="Digite seu WhatsApp:" 
          required
        />
      </div>
    </div>
  )
}