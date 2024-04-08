import Modal from "./Ui/Modal";

const CompanyInfo =(props)=>{
    return<Modal onClose={props.onClose}>
        <h1>Company: Geeksynergy Technologies Pvt Ltd</h1>
        <h1>Address: Sanjayanagar, Bengaluru-56</h1>
        <h1>Phone: XXXXXXXXX09
</h1>
<h1>Email: XXXXXX@gmail.com</h1>
    </Modal>
}

export default CompanyInfo;