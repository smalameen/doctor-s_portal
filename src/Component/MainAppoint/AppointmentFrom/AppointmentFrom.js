import React from "react";


import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

const AppointmentFrom = ({ onCloseModal, open, onOpenModal}) => {

    const { register, handleSubmit,  errors } = useForm();

    const onSubmit = data => {
        
        fetch("http://localhost:5000/addAppointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then(success => {
          if (success) {
            onCloseModal();
            alert("Appointment created successfully!");
          }
        })
    }

  return (
    <div>
      <Modal open={open}>
        <h3>Please provide your necessary information</h3>
        <div 
          style={{
            backgroundColor: "#3A4256",
            color: "white",
            padding: "1rem",
          }}
        >
        
    <div className="d-flex">
    <form  onSubmit={handleSubmit(onSubmit)}>
    
    <input name="example"  ref={register} />
    
   
    <input name="exampleRequired" ref={register({ required: true })} />
   
    {errors.exampleRequired && <span>This field is required</span>}
    
    <Button onClick={onCloseModal} type="submit" >Submit</Button>
  </form>
    </div>

         
        </div>
      </Modal>
    </div>
  );
};

export default AppointmentFrom;
