import useStore from "../store/useStore";

const UseToastMessge = () => {
  const setToastMessage = useStore((state) => state.setToastMessage);
  const toastMessage = useStore((state) => state.toastMessage);

  return { setToastMessage, toastMessage };
};

export default UseToastMessge;
