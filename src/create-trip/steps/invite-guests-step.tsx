import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../../components/button";

interface InviteGuestsStepProps {
  setIsGuestsModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsConfirmTripModalOpen: Dispatch<SetStateAction<boolean>>;
  emailsToInvite: Array<string>;
}

export function InviteGuestsStep({
  emailsToInvite,
  setIsConfirmTripModalOpen,
  setIsGuestsModalOpen,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        type="button"
        onClick={() => setIsGuestsModalOpen(true)}
        className="flex items-center gap-2 flex-1"
      >
        <UserRoundPlus className="size-5 text-zinc-400 " />
        {emailsToInvite.length > 0 ? (
          <span className="text-lg text-zinc-100">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-lg text-zinc-400">Quem estará na viagem?</span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800" />

      <Button onClick={() => setIsConfirmTripModalOpen(true)}>
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
