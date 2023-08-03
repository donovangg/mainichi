import { Tab } from "@headlessui/react";

type TabProps = {
  title: string;
  jpTitle: string;
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function TitleTab({ title, jpTitle }: TabProps) {
  return (
    <div className="w-full h-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex top-0 space-x-1 rounded-xl bg-pink-700/20 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-pink-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-pink-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-pink-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            English
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-md font-medium leading-5 text-pink-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-pink-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-pink-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            日本語
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className="text-xl">{title}</Tab.Panel>
          <Tab.Panel className="rounded-xl text-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-pink-400 focus:outline-none focus:ring-2">
            {jpTitle}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default TitleTab;
