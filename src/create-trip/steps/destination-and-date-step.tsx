import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../../components/button";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  setIsGuestsInputOpen: Dispatch<SetStateAction<boolean>>;
  setDestination: (destination: string) => void;
  setEventsStartAndEndDates: (
    eventsStartAndEndDates: DateRange | undefined
  ) => void;
  eventsStartAndEndDates: DateRange | undefined;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  setIsGuestsInputOpen,
  setDestination,
  setEventsStartAndEndDates,
  eventsStartAndEndDates,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const displayedDate =
    eventsStartAndEndDates &&
    eventsStartAndEndDates.from &&
    eventsStartAndEndDates.to
      ? format(eventsStartAndEndDates.from, "d' de 'LLL")
          .concat(" até ")
          .concat(format(eventsStartAndEndDates.to, "d' de 'LLL"))
      : null;

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400 " />
        <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <button
        onClick={() => setIsDatePickerOpen(true)}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 text-left w-[240px]"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 flex-1">
          {displayedDate || "Quando"}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button
                  type="button"
                  onClick={() => setIsDatePickerOpen(false)}
                >
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>

            <DayPicker
              mode="range"
              selected={eventsStartAndEndDates}
              onSelect={setEventsStartAndEndDates}
            />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800" />
      {isGuestsInputOpen ? (
        <Button variant="secondary" onClick={() => setIsGuestsInputOpen(false)}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={() => setIsGuestsInputOpen(true)}>
          Configurar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
