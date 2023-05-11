import { useSelector } from "react-redux";
import NavbarComponent from "../NavbarComponent";
import Sidebar from "../Sidebar";
import { Alert, Spinner, Table } from "react-bootstrap";
import "../../css/styles.css";
import { format } from "date-fns";

const OrderMain = () => {
  const orders = useSelector((state) => state.orderList.orders);
  const isLoading = useSelector((state) => state.orderList.isLoading);
  const isError = useSelector((state) => state.orderList.isError);
  console.log("orders", orders);

  return (
    <div className="d-flex">
      {" "}
      <div>
        <Sidebar />
      </div>
      <div className="navbar-wrapper">
        <NavbarComponent />
        <div className="hero-section">
          <h5>Orders</h5>
          <div className="table-bg">
            {isLoading && <Spinner animation="border" variant="success" />}
            {isError && (
              <Alert variant="danger">Aww snap, we got an error!😨</Alert>
            )}
            <Table bordered hover className="mb-0">
              <thead>
                <tr>
                  <th>Nr.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Total</th>
                  <th>Paid</th>
                  <th>Date</th>
                  <th>Status</th>
                  {/* <th>Action</th> */}
                </tr>
              </thead>
              <tbody>
                {orders.map((o, index) => (
                  <tr key={o._id}>
                    <td>{index + 1}</td>
                    <td>
                      <b>
                        {o.user?.firstName} {o.user?.lastName}
                      </b>
                    </td>
                    <td>{o.user?.email}</td>
                    <td>{o.totalPrice}€</td>
                    <td>
                      {o.isPaid ? (
                        <span className="badge rounded-pill alert-success dark-green">
                          Paid At {format(new Date(o.paidAt), "PPP")}{" "}
                        </span>
                      ) : (
                        <span className="badge rounded-pill alert-danger dark-danger">
                          Not paid
                        </span>
                      )}
                    </td>
                    <td>{format(new Date(o.createdAt), "PPP")}</td>
                    <td>
                      {o.isDelivered ? (
                        <span className="badge btn-success">Delivered</span>
                      ) : (
                        <span className="badge btn-dark">Not Delivered</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMain;
