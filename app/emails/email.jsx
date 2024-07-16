import { Html } from "@react-email/components";

const Email = (nom, prenom, email, telephone, message ) => {
  return (
    <Html>
      <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <h1>Nom/Prénom : {nom} {prenom}</h1>
          <h2>email : {email}</h2>
          <h3>email : {telephone}</h3>
          <p>message : {message}</p>
      </div>
    </Html>
  );
}

export default Email