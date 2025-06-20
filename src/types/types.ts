
export interface Package {
	id: string;
	name: string;
	price: string;
	features: string[];
	descriptions: string[];
}

export interface AdditionalOption {
	id: string;
	name: string;
	price: string;
	description: string;
}

export interface DetailsProps {
  onClose: () => void;
  pack: Package;
}

export interface AdditionalOptionsProps {
  selectedServices: string[];
  onToggleService: (name: string) => void;
	selectedPackageServices: string[];
};

export interface SelectedPackage {
  name: string;
  includedServices: string[];
};

export interface PackageProps {
  onChoose: (packageName: string) => void;
	selectedPackageName?: string;
};