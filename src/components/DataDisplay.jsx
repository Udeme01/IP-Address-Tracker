import PropTypes from "prop-types";

const DataDisplay = ({ address }) => {
  // css classes...
  const dataWrapper = `mt-6 first-of-type:mt-0 md:mt-0 lg:border-r lg:border-darkGray lg:last-of-type:border-0 lg:mr-3`;
  const ipHeader = `text-darkGray text-sm font-medium md:text-md uppercase`;
  const ipPara = `text-veryDarkGray text-xl font-bold mt-1 md:text-2xl`;
  return (
    <>
      {address && (
        <>
          <section
            className="absolute right-0 left-0 bg-white my-6 mx-6 p-6 rounded-xl shadow-xl grid grid-cols-1 text-center max-w-6xl md:top-44 lg:top-48 lg:py-12 md:gap-4 md:text-left md:grid-cols-2 lg:grid-cols-4 xl:mx-auto"
            style={{ zIndex: 10000 }}
          >
            <div className={dataWrapper}>
              <h2 className={ipHeader}>ip address</h2>
              <p className={ipPara}>{address.ip}</p>
            </div>
            <div className={dataWrapper}>
              <h2 className={ipHeader}>location</h2>
              <p className={ipPara}>
                {address.location.city}, {address.location.region}
              </p>
            </div>
            <div className={dataWrapper}>
              <h2 className={ipHeader}>timezone</h2>
              <p className={ipPara}>UTC {address.location.timezone}</p>
            </div>
            <div className={dataWrapper}>
              <h2 className={ipHeader}>isp</h2>
              <p className={ipPara}>{address.isp}</p>
            </div>
          </section>
        </>
      )}
    </>
  );
};

DataDisplay.propTypes = {
  address: PropTypes.object,
};

export default DataDisplay;
