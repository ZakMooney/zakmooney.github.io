import Card from "./card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {
  const {
    open,
    closeModal,
    wide,
  } = props;

  return (
    <>
      {open ? (
        <div
          style={{
            position: 'fixed',
            inset: '0px',
            margin: '0px',
            display: 'grid',
            height: '100%',
            maxHeight: 'none',
            width: '100%',
            maxWidth: 'none',
            justifyItems: 'center',
            padding: '0px',
            overscrollBehavior: 'contain',
            zIndex: '999',
            backgroundColor: 'transparent',
            color: 'inherit',
            transitionDuration: '200ms',
            transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            transitionProperty: 'transform, opacity, visibility',
            overflowY: 'hidden',
          }}
        >
          <div
            className={"z-40 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full px-4 " + (wide ? "max-w-[62rem]" : "max-w-[34rem]") }
          >
            <Card className="w-full max-h-[90vh] modal-frost">
              {/* <div className="relative w-full">
                <div
                  className="h-6 w-6 p-4 flex items-center justify-center rounded hover:bg-slate-500/10 transition-all cursor-pointer absolute z-10 right-0 top-0 -mt-1 -mr-2"
                  onClick={closeModal}
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="xl"
                    className="pointer-events-none modal-close"
                  />
                </div>
              </div> */}
              <div className="card-body overflow-scroll">
                {props.children}
              </div>
            </Card>
          </div>
          <div
            onClick={closeModal}
            className="z-30 fixed inset-0 bg-slate-900/80 backdrop-blur-md"
          />
        </div>
      ) : (null)}
    </>
  );
};

export default Modal;