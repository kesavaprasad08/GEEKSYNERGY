import Modal from "./Ui/Modal";
import classes from './CompanyInfo.module.css';
const CompanyInfo = (props) => {
  return (
    <Modal onClose={props.onClose}>
        <div className={classes.CompanyInfo}>
            
      <button onClick={props.onClose}>X</button>
      <div>
        <p>Company: Geeksynergy Technologies Pvt Ltd</p>
        <p>Address: Sanjayanagar, Bengaluru-56</p>
        <p>Phone: XXXXXXXXX09</p>
        <p>Email: XXXXXX@gmail.com</p>
      </div>
      </div>
    </Modal>
  );
};

export default CompanyInfo;
