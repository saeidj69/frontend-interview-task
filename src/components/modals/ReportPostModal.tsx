import reportReasonsData from "../../data/reportReasons.json";
import useStore from "../../store/useStore";
import Modal from "../Modal";
interface ReprotPostModalProps {
  isOpen: boolean;
}

const reportReasons = reportReasonsData;

const ReportPostModal = ({ isOpen }: ReprotPostModalProps) => {
  const { setReportModal, setToastMessage } = useStore();

  const handleReport = () => {
    setReportModal(undefined);
    setToastMessage({
      type: "success",
      message: "Post reported successfully!",
    });
  };

  return (
    <Modal
      title="Report Post"
      isOpen={isOpen}
      onClose={() => setReportModal(undefined)}
    >
      <div>
        {reportReasons.map((reason) => (
          <div key={reason.id} className="mb-1">
            <input
              type="radio"
              name="reason"
              id={reason.reason}
              className="cursor-pointer"
              defaultChecked={reason.default}
            />
            <label
              htmlFor={reason.reason}
              className="cursor-pointer text-black pl-2"
            >
              {reason.reason}
            </label>
          </div>
        ))}

        <div className="flex gap-2">
          <button
            onClick={handleReport}
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
          >
            Report
          </button>
          <button
            onClick={() => setReportModal(undefined)}
            className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded mt-4"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ReportPostModal;
