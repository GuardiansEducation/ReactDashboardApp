export interface AccordionItemData {
  id: string;
  label: string;
  disabled?: boolean;
  icon: React.ReactNode;
  content: React.ReactNode;
  controls?: React.ReactNode[];
};
