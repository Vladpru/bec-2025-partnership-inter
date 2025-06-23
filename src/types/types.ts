
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

export interface CartProps {
	selectedPackages: {
		name: string
		includedServices: string[]
	}[]
	customServices: string[]
	servicesPrice: { [key: string]: number }
	packagesPrice: { [key: string]: number }
	onRemovePackage: (name: string) => void
	onRemoveService: (name: string) => void
}

export interface refPropSpon {
  refPropSpon: React.RefObject<HTMLElement | null>;
}

export interface HeaderProps {
	scrollToSection?: React.RefObject<HTMLElement | null> | ((ref: React.RefObject<HTMLElement | null>) => void);
	refs?: {
		topRef: React.RefObject<HTMLElement | null>;
		aboutRef: React.RefObject<HTMLElement | null>;
		statisticsRef: React.RefObject<HTMLElement | null>;
		contactsRef: React.RefObject<HTMLElement | null>;
		sposorRef: React.RefObject<HTMLElement | null>;
	};
};