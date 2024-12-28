import { Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;
  return (
    <Drawer
      title="Chi tiết User"
      onClose={() => {
        setDataDetail(null);
        setIsDetailOpen(false);
      }}
      open={isDetailOpen}
    >
      {dataDetail ? (
        <>
          <p>Id: {dataDetail._id}</p>
          <br />
          <p>Full Name: {dataDetail.fullName}</p>
          <br />
          <p>Phone number: {dataDetail.phone}</p>
          <br />
          <p>Avatar: </p>
          <br />
          <div>
            <img
              height={100}
              width={150}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                dataDetail.avatar
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="btnUpload"
              style={{
                display: "block",
                width: "fit-content",
                marginTop: "15px",
                padding: "5px 10px",
                background: "orange",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Upload Avatar
            </label>
            <input type="file" hidden id="btnUpload" />
          </div>
        </>
      ) : (
        <>Không có dữ liệu</>
      )}
    </Drawer>
  );
};

export default ViewUserDetail;
