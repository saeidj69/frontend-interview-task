import useStore from "../../store/useStore";
import Modal from "../Modal";

interface ReprotPostModalProps {
  isOpen: boolean;
}

const ReportPostModal = ({ isOpen }: ReprotPostModalProps) => {
  const toggleReport = useStore((state) => state.toggleReportModal);

  return (
    <Modal isOpen={isOpen} onClose={() => toggleReport(undefined)}>
      <div>hello there</div>
    </Modal>
  );
};

export default ReportPostModal;
