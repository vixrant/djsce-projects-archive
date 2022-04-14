import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { RiTreasureMapFill, RiLogoutBoxFill } from 'react-icons/ri';
import { ImStatsDots } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { IoIosDocument } from 'react-icons/io';

const Sidebar =
() => {
  return (
    <div id="sidebar" className="shadow py-5">
      <Button tag={Link} to="/" color="light">
        <CgProfile size={32} />
      </Button>

      <Button tag={Link} to="/" color="light" className="mt-auto">
        <RiTreasureMapFill size={32} />
      </Button>

      <Button tag={Link} to="/stats" color="light" className="mt-4">
        <ImStatsDots size={32} />
      </Button>

      <Button tag={Link} to="/submit" color="light" className="mt-4">
        <IoIosDocument size={32} />
      </Button>

      <Button tag={Link} to="/login" color="light" className="mt-auto">
        <RiLogoutBoxFill size={32} />
      </Button>
    </div>
  );
};

export default Sidebar;
