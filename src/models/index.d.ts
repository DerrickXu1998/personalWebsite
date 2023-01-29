import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerLandingCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LandingCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Header?: string | null;
  readonly Headline?: string | null;
  readonly Content?: string | null;
  readonly Button?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLandingCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LandingCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Header?: string | null;
  readonly Headline?: string | null;
  readonly Content?: string | null;
  readonly Button?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LandingCard = LazyLoading extends LazyLoadingDisabled ? EagerLandingCard : LazyLandingCard

export declare const LandingCard: (new (init: ModelInit<LandingCard>) => LandingCard) & {
  copyOf(source: LandingCard, mutator: (draft: MutableModel<LandingCard>) => MutableModel<LandingCard> | void): LandingCard;
}