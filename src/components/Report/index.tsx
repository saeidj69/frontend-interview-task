import { type FC, useCallback } from "react";

import { REPORT_REASONS } from "../../constants/reason";
import Modal from "../Modal";
import useToast from "../Toast";

type Props = {
  isOpen: boolean;
  toggle: VoidFunction;
  postId: number | null;
};

const ReportFeed: FC<Props> = ({ isOpen, toggle }) => {
  const { addToast } = useToast();

  const handleReport = useCallback(() => {
    addToast("success", "Okay we've received your report, thank you!");
    toggle();
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={toggle}>
      <div className="space-y-8">
        <h2>What's the reason you're reporting the post ?</h2>

        <div className="space-y-4">
          {REPORT_REASONS.map((reason) => (
            <button
              key={reason.id}
              onClick={() => handleReport()}
              className="block w-full py-2 px-4 rounded text-gray-700 dark:text-white bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {reason.description}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ReportFeed;
