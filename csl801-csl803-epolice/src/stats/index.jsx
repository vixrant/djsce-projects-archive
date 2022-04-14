import { Card, CardBody, } from "reactstrap";
import { ComplaintsRate, ComplaintsTypes, AreaCases, ManagedChart } from "./charts";

const Stats =
() => {
    return (
        <div style={{ paddingLeft: 128, paddingRight: 16, paddingTop: 32, minHeight: "100vh", background: "whitesmoke" }}>
            <h1><mark>Statistics</mark></h1>
            <div className="masonry mt-5" >
                <Card className="w-100 p-2 font-emp shadow" style={{ background: "aliceblue" }}>
                    <CardBody>
                        <ComplaintsRate />
                    </CardBody>
                    <h6 className="fw-bolder text-center">Complaints rate</h6>
                </Card>

                <Card className="w-100 p-2 font-emp shadow" style={{ background: "beige" }}>
                    <CardBody>
                        <ComplaintsTypes />
                    </CardBody>
                    <h6 className="fw-bolder text-center">Complaints by type</h6>
                </Card>
                
                <Card className="w-100 p-2 font-emp shadow" style={{ background: "mistyrose" }}>
                    <CardBody>
                        <AreaCases />
                    </CardBody>
                    <h6 className="fw-bolder text-center">Complaints by area</h6>
                </Card>

                <Card className="w-100 p-2 font-emp shadow" style={{ background: "lightcoral" }}>
                    <CardBody>
                        <ManagedChart />
                    </CardBody>
                    <h6 className="fw-bolder text-center">Percentage of managed cases</h6>
                </Card>
            </div>
        </div>
    );
};

export default Stats;
