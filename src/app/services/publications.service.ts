import { Injectable } from '@angular/core';
import {Publication} from "../data/publication";

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  private _publications: Publication[] = [
    {
      authors : "L. Portes Cavalheiro, S. Bernard, J.P. Barddal, L. Heutte",
      title : "Random Forest Kernel for High-Dimension Low Sample Size Classification",
      date : "2024",
      journal : "Statistics & Computing",
      link : "https://arxiv.org/abs/2310.14710",
    },
    {
      authors : "T. Mayet, S. Bernard, C. Chatelain, R. Herault",
      title : "Multiple Noises in Diffusion Model for Semi-Supervised Multi-Domain Translation",
      date : "2023",
      journal : "CoRR abs/2309.14394",
      link : "https://arxiv.org/abs/2309.14394",
    },
    {
      authors : "F. Gonzalez, F-X Demoulin, S. Bernard",
      title : "Towards Long-Term Predictions of Turbulence using Neural Operators",
      date : "2023",
      journal : "International ERCOFTAC Symposium on Engineering Turbulence Modelling and Measurements",
      link : "https://arxiv.org/abs/2307.13517",
    },
    {
      authors : "F. Gonzalez, F-X Demoulin, S. Bernard",
      title : "Promoting Numerical Stability on Neural Surrogate Models of Turbulent Flows",
      date : "2023",
      journal : "18th European Turbulence Conference",
      link : "",
    },
    {
      authors : "T. Mayet, S. Bernard, C. Chatelain, R. Herault",
      title : "Domain Translation via Latent Space Mapping",
      date : "2023",
      journal : "International Joint Conference on Neural Networks (IJCNN)",
      link : "https://arxiv.org/abs/2212.03361",
    },
    {
      authors : "H. Cao, S. Bernard, L. Heutte, R. Sabourin",
      title : "A Novel Random Forest Dissimilarity Measure for Multi-View Learning",
      date : "2021",
      journal : "International Conference on Pattern Recognition (ICPR)",
      link : "https://arxiv.org/abs/2007.02572",
    },
    {
      authors : "S. Bernard, H. Cao, L. Heutte, R. Sabourin",
      title : "Random forest for dissimilarity-based multi-view learning",
      date : "2020",
      journal : "Handbook of Pattern Recognition and Computer Vision (HPRCV)",
      link : "https://arxiv.org/abs/2007.08377",
    },
    {
      authors : "H. Cao, S. Bernard, L. Heutte, R. Sabourin",
      title : "Random forest dissimilarity based multi-view learning for radiomics applications",
      date : "2019",
      journal : "Pattern Recognition (PR)",
      link : "https://hal.science/hal-02075715v1",
    },
    {
      authors : "H. Cao, S. Bernard, L. Heutte, R. Sabourin",
      title : "Dynamic voting in multi-view learning for radiomics applications",
      date : "2018",
      journal : "Joint IAPR International Workshop on Structural, Syntactic, and Statistical Pattern Recognition (S+SSPR)",
      link : "https://hal.science/hal-02088181",
    },
    {
      authors : "H. Cao, S. Bernard, L. Heutte, R. Sabourin",
      title : "Improve the performance of transfer learning without fine-tuning using dissimilarity-based multi-view learning for breast cancer histology images",
      date : "2018",
      journal : "International Conference Image Analysis and Recognition (ICIAR)",
      link : "https://hal.science/hal-02088167",
    },
    {
      authors : "H. Cao, S. Bernard, L. Heutte, R. Sabourin",
      title : "Pondération dynamique en apprentissage multi-vues pour des applications radiomics",
      date : "2018",
      journal : "Conférence sur l’Apprentissage automatique (CAp)",
      link : "https://hal.science/hal-02114995v1",
    },
    {
      authors : "H. Cao, S. Bernard, L. Heutte, R. Sabourin",
      title : "Dissimilarity-based representation for radiomics applications",
      date : "2018",
      journal : "International Conference on Pattern Recognition and Artificial Intelligence (ICPRAI)",
      link : "https://hal.science/hal-02111139v1",
    },
    {
      authors : "S. Bernard, C. Chatelain, S. Adam, R. Sabourin",
      title : "The multiclass roc front method for cost-sensitive classification",
      date : "2016",
      journal : "Pattern Recognition (PR)",
      link : "https://hal.science/hal-01338007v1",
    },
    {
      authors : "C. Dubos, S. Bernard, S. Adam, R. Sabourin",
      title : "ROC-based cost-sensitive classification with a reject option",
      date : "2016",
      journal : "International Conference on Pattern Recognition (ICPR)",
      link : "https://hal.science/hal-02088187",
    },
    {
      authors : "S. Bernard, C. Chatelain, S. Adam, R. Sabourin",
      title : "Apprentissage multiclasse en environnement incertain",
      date : "2014",
      journal : "21ème rencontre de la Société Francophone de Classification (SFC)",
      link : "https://hal.science/hal-02088209",
    },
    {
      authors : "C. Désir, S. Bernard, C. Petitjean, L. Heutte",
      title : "One-Class Random Forests",
      date : "2013",
      journal : "Pattern Recognition (PR)",
      link : "https://hal.science/hal-00862706v1",
    },
    {
      authors : "S. Bernard, S. Adam, L. Heutte",
      title : "Dynamic Random Forests",
      date : "2012",
      journal : "Pattern Recognition Letters (PRL)",
      link : "https://hal.science/hal-00710083v1",
    },
    {
      authors : "E. Vintrou, M. Soumaré, S. Bernard, A. Bégué, C. Baron, D. Lo Seen",
      title : "Mapping fragmented agricultural systems in the sudano-sahelian environments of africa using random forest and ensemble metrics of coarse resolution modis imagery",
      date : "2012",
      journal : "Photogrammetric Engineering & Remote Sensing (PE&RS)",
      link : "",
    },
    {
      authors : "C. Désir, S. Bernard, C. Petitjean, L. Heutte",
      title : "A new random forest method for one-class classification",
      date : "2012",
      journal : "Joint IAPR International Workshop on Structural, Syntactic, and Statistical Pattern Recognition (S+SSPR)",
      link : "https://hal.science/hal-00794153v1",
    },
    {
      authors : "C. Désir, S. Bernard, C. Petitjean, L. Heutte",
      title : "A random forest based approach for one class classification in medical imaging",
      date : "2012",
      journal : "MICCAI International Workshop on Machine Learning in Medical Imaging (MLMI)",
      link : "https://hal.science/hal-00794160v1",
    },
    {
      authors : "S. Bernard, L. Heutte, S. Adam",
      title : "A study of strength and correlation in random forests",
      date : "2010",
      journal : "International Conference on Intelligent Computing (ICIC)",
      link : "https://hal.science/hal-00598466v1",
    },
    {
      authors : "S. Bernard",
      title : "Forêts aléatoires: de l’analyse des mécanismes de fonctionnement à la construction dynamique",
      date : "2009",
      journal : "Ph.D. Thesis",
      link : "https://hal.science/tel-00598441v1",
    },
    {
      authors : "S. Bernard, L. Heutte, S. Adam",
      title : "On the selection of decision trees in random forests",
      date : "2009",
      journal : "International Joint Conference on Neural Networks (IJCNN)",
      link : "https://hal.science/hal-00436355v1",
    },
    {
      authors : "S. Bernard, L. Heutte, S. Adam",
      title : "Influence of hyperparameters on random forest accuracy",
      date : "2009",
      journal : "International Workshop on Multiple Classifier Systems (MCS)",
      link : "https://hal.science/hal-00436358v1",
    },
    {
      authors : "S. Bernard, L. Heutte, S. Adam",
      title : "Towards a better understanding of random forests through the study of strength and correlation",
      date : "2009",
      journal : "International Conference on Intelligent Computing (ICIC)",
      link : "https://hal.science/hal-00436361v1",
    },
    {
      authors : "S. Bernard, L. Heutte, S. Adam",
      title : "Une étude sur la paramétrisation des forêts aléatoires",
      date : "2009",
      journal : "Conférence sur l’Apprentissage Automatique (CAp)",
      link : "https://hal.science/hal-00436365v1",
    },
    {
      authors : "S. Bernard, L. Heutte, S. Adam",
      title : "Forest-RK: a new random forest induction method",
      date : "2008",
      journal : "International Conference on Intelligent Computing (ICIC)",
      link : "https://hal.science/hal-00436367v1",
    },
    {
      authors : "S. Bernard, L. Heutte, S. Adam",
      title : "Etude de l’influence des paramètres sur les performances des forêts aléatoires",
      date : "2008",
      journal : "Colloque International Francophone sur l’Ecrit et le Document (CIFED)",
      link : "https://hal.science/hal-00334425v1",
    },
    {
      authors : "L. Heutte, S. Bernard, S. Adam, and É. Oliveira",
      title : "De la selection d’arbres de décision dans les forêts aléatoires",
      date : "2008",
      journal : "Colloque International Francophone sur l’Ecrit et le Document (CIFED)",
      link : "https://hal.science/hal-00334413v1",
    },
    {
      authors : "S. Bernard, S. Adam, L. Heutte",
      title : "Using random forests for handwritten digit recognition",
      date : "2007",
      journal : "International Conference on Document Analysis and Recognition (ICDAR)",
      link : "https://hal.science/hal-00436372v1",
    },
  ];
  constructor() { }
  public get publications(): ReadonlyArray<Publication> {
    return this._publications;
  }
}
